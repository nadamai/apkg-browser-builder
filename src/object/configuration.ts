import { Object } from '../abstract';
import { NewSpread, NewSpreadKey } from '../dictionary/new-spread';
import { Configuration as ConfigurationObject } from '../model';
import { ColumnValue } from '../type';
import { Deck } from './deck';
import { Model } from './model';

/**
 * @group Configuration
 */
export class Configuration extends Object<ConfigurationObject> {
	protected object: ConfigurationObject = {};

	protected currentDeck: Deck | null = null;
	protected activeDecks: Deck[] = [];
	protected currentModel: Model | null = null;

	public getCurrentDeck(): Deck | null {
		return this.currentDeck;
	}

	public setCurrentDeck(deck: Deck): Configuration {
		this.object.curDeck = deck.getId();
		this.currentDeck = deck;

		return this;
	}

	public getActiveDecks(): Deck[] {
		return this.activeDecks;
	}

	public setActiveDecks(decks: Deck[]): Configuration {
		this.activeDecks = decks;
		this.object.activeDecks = decks.map((deck: Deck) => deck.getId());

		return this;
	}

	public addActiveDeck(deck: Deck): Configuration {
		this.activeDecks.push(deck);
		this.updateActiveDecks();

		return this;
	}

	public removeActiveDeck(deck: Deck): Configuration {
		if (!this.activeDecks.length) {
			return this;
		}

		const index = this.activeDecks.indexOf(deck);

		if (index > -1) {
			this.activeDecks.splice(index, 1);
			this.updateActiveDecks();
		}

		return this;
	}

	private updateActiveDecks(): void {
		this.setActiveDecks(this.activeDecks);
	}

	public getNewSpread(): NewSpreadKey | null {
		if (this.object.newSpread === undefined) {
			return null;
		}

		return this.getDictionaryKey(NewSpread, this.object.newSpread) || 'newCardsDistribute';
	}

	public setNewSpread(newSpread: NewSpreadKey): Configuration {
		this.object.newSpread = NewSpread[newSpread];

		return this;
	}

	public getLearnAheadLimit(): number | null {
		return this.object.collapseTime ?? null;
	}

	public setLearnAheadLimit(collapseTime: number): Configuration {
		this.object.collapseTime = collapseTime;

		return this;
	}

	public getTimeboxTimeLimit(): number | null {
		return this.object.timeLim ?? null;
	}

	public setTimeboxTimeLimit(timeLim: number): Configuration {
		this.object.timeLim = timeLim;

		return this;
	}

	public getShowNextReviewTimeAboveAnswerButtons(): boolean | null {
		return this.object.estTimes ?? null;
	}

	public setShowNextReviewTimeAboveAnswerButtons(estTimes: boolean): Configuration {
		this.object.estTimes = estTimes;

		return this;
	}

	public getShowRemainingCardCountDuringReview(): boolean | null {
		return this.object.dueCounts ?? null;
	}

	public setShowRemainingCardCountDuringReview(dueCounts: boolean): Configuration {
		this.object.dueCounts = dueCounts;

		return this;
	}

	public getCurrentModel(): Model | null {
		return this.currentModel;
	}

	public setCurrentModel(model: Model): Configuration {
		this.object.curModel = model.getId().toString();
		this.currentModel = model;

		return this;
	}

	public getNextPosition(): number | null {
		return this.object.nextPos ?? null;
	}

	public setNextPosition(nextPos: number): Configuration {
		this.object.nextPos = nextPos;

		return this;
	}

	public getSortType(): string | null {
		return this.object.sortType ?? null;
	}

	public setSortType(sortType: string): Configuration {
		this.object.sortType = sortType;

		return this;
	}

	public getSortBackwrds(): boolean | null {
		return this.object.sortBackwards ?? null;
	}

	public setSortBackwrds(sortBackwards: boolean): Configuration {
		this.object.sortBackwards = sortBackwards;

		return this;
	}

	public getAddToCurrentDeck(): boolean | null {
		return this.object.addToCur ?? null;
	}

	public setAddToCurrentDeck(addToCur: boolean): Configuration {
		this.object.addToCur = addToCur;

		return this;
	}

	public getShowLearningCardsWithLargerSteps(): boolean | null {
		return this.object.dayLearnFirst ?? null;
	}

	public setShowLearningCardsWithLargerSteps(dayLearnFirst: boolean): Configuration {
		this.object.dayLearnFirst = dayLearnFirst;

		return this;
	}

	public getNewBury(): boolean | null {
		return this.object.newBury ?? null;
	}

	public setNewBury(newBury: boolean): Configuration {
		this.object.newBury = newBury;

		return this;
	}

	public getLastUnburied(): number | null {
		return this.object.lastUnburied ?? null;
	}

	public setLastUnburied(lastUnburied: number): Configuration {
		this.object.lastUnburied = lastUnburied;

		return this;
	}

	public getActiveColumns(): ColumnValue[] | null {
		return this.object.activeCols ?? null;
	}

	public setActiveColumns(columns: ColumnValue[]): Configuration {
		this.object.activeCols = columns;

		return this;
	}

	public addActiveColumn(column: ColumnValue): Configuration {
		if (!this.object.activeCols) {
			this.object.activeCols = [];
		}

		this.object.activeCols.push(column);

		return this;
	}

	public removeActiveColumn(column: ColumnValue): Configuration {
		if (!this.object.activeCols) {
			return this;
		}

		const index = this.object.activeCols.indexOf(column);

		if (index > -1) {
			this.object.activeCols.splice(index, 1);
		}

		return this;
	}

	public setValue(attribute: string, value: any): Configuration {
		this.object[attribute] = value;

		return this;
	}

	public getValue(attribute: string): any {
		return this.object[attribute];
	}
}
