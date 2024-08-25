import { Entity } from '../abstract';
import { Collection as CollectionModel } from '../model';

export class Collection extends Entity<CollectionModel> {
	protected table: string = 'col';

	protected entity: CollectionModel = {
		id: 0,
		crt: 0,
		mod: 0,
		scm: 0,
		ver: 11,
		dty: 0,
		usn: -1,
		ls: 0,
		conf: '{}',
		models: '{}',
		decks: '{}',
		dconf: '{}',
		tags: ''
	};

	public getId(): number {
		return this.entity.id;
	}

	public setId(id: number): Collection {
		this.entity.id = id;

		return this;
	}

	public getCreationTime(): number {
		return this.entity.crt;
	}

	public setCreationTime(time: number): Collection {
		this.entity.crt = time;

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	public setModificationTime(time: number): Collection {
		this.entity.mod = time;

		return this;
	}

	public getSchemaModificationTime(): number {
		return this.entity.scm;
	}

	public setSchemaModificationTime(time: number): Collection {
		this.entity.scm = time;

		return this;
	}

	public getVersion(): number {
		return this.entity.ver;
	}

	public setVersion(version: number): Collection {
		this.entity.ver = version;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Collection {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getLastSyncTime(): number {
		return this.entity.ls;
	}

	public setLastSyncTime(time: number): Collection {
		this.entity.ls = time;

		return this;
	}

	// public getConfiguration(): Configuration {
	// 	return JSON.parse(this.entity.conf);
	// }

	// public setConfiguration(configuration: Configuration): Collection {
	// 	this.entity.conf = JSON.stringify(configuration);

	// 	return this;
	// }

	// public getConfiguration(): Models {
	// 	return JSON.parse(this.entity.models);
	// }

	// public setConfiguration(models: Models): Collection {
	// 	this.entity.models = JSON.stringify(models);

	// 	return this;
	// }

	// public getDecks(): Decks {
	// 	return JSON.parse(this.entity.conf);
	// }

	// public setDecks(decks: Decks): Collection {
	// 	this.entity.conf = JSON.stringify(decks);

	// 	return this;
	// }

	// public getDeckOptions(): DeckOptions {
	// 	return JSON.parse(this.entity.dconf);
	// }

	// public setDecks(options: DeckOptions): Collection {
	// 	this.entity.dconf = JSON.stringify(options);

	// 	return this;
	// }

	// public getTags(): Tags {
	// 	return JSON.parse(this.entity.tags);
	// }

	// public setTags(tags: Tags): Collection {
	// 	this.entity.tags = JSON.stringify(tags);

	// 	return this;
	// }
}
