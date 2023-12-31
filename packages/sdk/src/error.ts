import * as config from '@zerobridge-xyz/configuration';
import { WithContext } from '@zerobridge-xyz/multi-provider';
import { NomadContext } from './NomadContext';

export class NomadError<T extends NomadContext> extends WithContext<
  config.Domain,
  T
> {}

export class FailedHomeError<T extends NomadContext> extends NomadError<T> {
  constructor(context: T, msg: string) {
    super(context, msg);
    this.name = 'FailedHomeError';
  }
}
