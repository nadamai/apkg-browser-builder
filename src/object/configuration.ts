import { Object } from '../abstract';
import { Configuration as ConfigurationObject } from '../model';

export class Configuration extends Object<ConfigurationObject> {
	protected object: ConfigurationObject = {};
}
