import { Bixi } from '@velo/core';
import { Subject } from 'rxjs';
import { Resolvers } from './resolvers';
import { Resolver, SubscribeOptions, Topic } from './types';

export const subscribe = <T>(topic: Topic, options?: SubscribeOptions) => {
  const bixi = options?.client || new Bixi(options?.language || 'en');
  const resolver = Resolvers[topic] as Resolver<T>;

  const subject = new Subject<T>();

  const resolve = async () => {
    const data = await resolver(bixi);
    data?.forEach((t) => subject.next(t));
  };

  const interval = setInterval(resolve, options?.ttl || 5_000);
  const unsubscribe = () => clearInterval(interval);

  resolve();

  return { subject, unsubscribe };
};
