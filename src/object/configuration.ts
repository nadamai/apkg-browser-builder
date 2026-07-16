import { Object } from '../abstract';
import { NewSpread, NewSpreadKey } from '../dictionary/new-spread';
import { Configuration as ConfigurationObject } from '../model';
import { ColumnValue } from '../type';
import { Deck } from './deck';
import { Model } from './model';

/**
 * Anki client preferences stored in the collection — new-card scheduling, timeboxing,
 * card browser appearance and the currently selected {@link Deck} and {@link Model}.
 * All attributes are optional; Anki falls back to its defaults for absent ones.
 */
export class Configuration extends Object<ConfigurationObject> {
	protected object: ConfigurationObject = {};

	protected currentDeck: Deck | null = null;
	protected activeDecks: Deck[] = [];
	protected currentModel: Model | null = null;

	public getObject(): ConfigurationObject {
		if (this.currentDeck) {
			this.object.curDeck = this.currentDeck.getId();
		}

		if (this.currentModel) {
			this.object.curModel = this.currentModel.getId().toString();
		}

		if (this.activeDecks.length) {
			this.updateActiveDecks();
		}

		return this.object;
	}

	public getCurrentDeck(): Deck | null {
		return this.currentDeck;
	}

	/**
	 * @param deck The currently selected {@link Deck}, linked by ID.
	 */
	public setCurrentDeck(deck: Deck): Configuration {
		this.object.curDeck = deck.getId();
		this.currentDeck = deck;

		return this;
	}

	public getActiveDecks(): Deck[] {
		return this.activeDecks;
	}

	/**
	 * @param decks The {@link Deck}s (linked by IDs) currently selected for study — typically
	 * the current deck and its subdecks.
	 */
	public setActiveDecks(decks: Deck[]): Configuration {
		this.activeDecks = decks;
		this.object.activeDecks = decks.map((deck: Deck) => deck.getId());

		return this;
	}

	/**
	 * @param deck A {@link Deck} to be added to the active ones. Duplicates are skipped.
	 */
	public addActiveDeck(deck: Deck): Configuration {
		if (this.activeDecks.indexOf(deck) > -1) {
			return this;
		}

		this.activeDecks.push(deck);
		this.updateActiveDecks();

		return this;
	}

	/**
	 * @param deck A {@link Deck} to be removed from the active ones.
	 */
	public removeActiveDeck(deck: Deck): Configuration {
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

		return this.getDictionaryKey(NewSpread, this.object.newSpread) || 'new_cards_distribute';
	}

	/**
	 * @param newSpread How new cards are mixed with reviews: `new_cards_distribute` (spread
	 * among the reviews), `new_cards_last` or `new_cards_first`.
	 */
	public setNewSpread(newSpread: NewSpreadKey): Configuration {
		this.object.newSpread = NewSpread[newSpread];

		return this;
	}

	public getLearnAheadLimit(): number | null {
		return this.object.collapseTime ?? null;
	}

	/**
	 * @param collapseTime The learn-ahead limit in seconds (e.g. `1200` = 20 minutes): when
	 * nothing else is due, cards in learning are shown up to this amount of time earlier.
	 */
	public setLearnAheadLimit(collapseTime: number): Configuration {
		this.object.collapseTime = collapseTime;

		return this;
	}

	public getTimeboxTimeLimit(): number | null {
		return this.object.timeLim ?? null;
	}

	/**
	 * @param timeLim The timeboxing period in seconds (`0` = disabled): Anki shows the number
	 * of cards studied after each such period during a study session.
	 */
	public setTimeboxTimeLimit(timeLim: number): Configuration {
		this.object.timeLim = timeLim;

		return this;
	}

	public getShowNextReviewTimeAboveAnswerButtons(): boolean | null {
		return this.object.estTimes ?? null;
	}

	/**
	 * @param estTimes Whether the next review time is shown above the answer buttons.
	 */
	public setShowNextReviewTimeAboveAnswerButtons(estTimes: boolean): Configuration {
		this.object.estTimes = estTimes;

		return this;
	}

	public getShowRemainingCardCountDuringReview(): boolean | null {
		return this.object.dueCounts ?? null;
	}

	/**
	 * @param dueCounts Whether the remaining card counts are shown during review.
	 */
	public setShowRemainingCardCountDuringReview(dueCounts: boolean): Configuration {
		this.object.dueCounts = dueCounts;

		return this;
	}

	public getCurrentModel(): Model | null {
		return this.currentModel;
	}

	/**
	 * @param model The most recently used {@link Model}, linked by ID.
	 */
	public setCurrentModel(model: Model): Configuration {
		this.object.curModel = model.getId().toString();
		this.currentModel = model;

		return this;
	}

	public getNextPosition(): number | null {
		return this.object.nextPos ?? null;
	}

	/**
	 * @param nextPos The `due` position assigned to the next added new card (starts at `1`).
	 */
	public setNextPosition(nextPos: number): Configuration {
		this.object.nextPos = nextPos;

		return this;
	}

	public getSortType(): string | null {
		return this.object.sortType ?? null;
	}

	/**
	 * @param sortType The card browser column used for sorting, e.g. `noteFld` or `cardDue`.
	 */
	public setSortType(sortType: string): Configuration {
		this.object.sortType = sortType;

		return this;
	}

	public getSortBackwards(): boolean | null {
		return this.object.sortBackwards ?? null;
	}

	/**
	 * @param sortBackwards Whether the card browser sorting order is reversed.
	 */
	public setSortBackwards(sortBackwards: boolean): Configuration {
		this.object.sortBackwards = sortBackwards;

		return this;
	}

	public getAddToCurrentDeck(): boolean | null {
		return this.object.addToCur ?? null;
	}

	/**
	 * @param addToCur Whether new cards are added to the currently selected deck (`true`) or
	 * to the deck the note's model is linked to (`false`).
	 */
	public setAddToCurrentDeck(addToCur: boolean): Configuration {
		this.object.addToCur = addToCur;

		return this;
	}

	public getShowLearningCardsWithLargerSteps(): boolean | null {
		return this.object.dayLearnFirst ?? null;
	}

	/**
	 * @param dayLearnFirst Whether learning cards with steps of a day or more are shown
	 * before reviews.
	 */
	public setShowLearningCardsWithLargerSteps(dayLearnFirst: boolean): Configuration {
		this.object.dayLearnFirst = dayLearnFirst;

		return this;
	}

	public getNewBury(): boolean | null {
		return this.object.newBury ?? null;
	}

	/**
	 * @param newBury Legacy option for burying new sibling cards, superseded by per-deck
	 * options in modern Anki.
	 */
	public setNewBury(newBury: boolean): Configuration {
		this.object.newBury = newBury;

		return this;
	}

	public getLastUnburied(): number | null {
		return this.object.lastUnburied ?? null;
	}

	/**
	 * @param lastUnburied The day the cards were last unburied, in days since the collection
	 * creation. Legacy scheduler bookkeeping.
	 */
	public setLastUnburied(lastUnburied: number): Configuration {
		this.object.lastUnburied = lastUnburied;

		return this;
	}

	public getActiveColumns(): ColumnValue[] | null {
		return this.object.activeCols ?? null;
	}

	/**
	 * @param columns The columns displayed in the card browser.
	 */
	public setActiveColumns(columns: ColumnValue[]): Configuration {
		this.object.activeCols = columns;

		return this;
	}

	/**
	 * @param column A column to be added to the ones displayed in the card browser.
	 * Duplicates are skipped.
	 */
	public addActiveColumn(column: ColumnValue): Configuration {
		if (!this.object.activeCols) {
			this.object.activeCols = [];
		}

		if (this.object.activeCols.indexOf(column) > -1) {
			return this;
		}

		this.object.activeCols.push(column);

		return this;
	}

	/**
	 * @param column A column to be removed from the ones displayed in the card browser.
	 */
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

	/**
	 * Sets an arbitrary configuration attribute not covered by the typed setters.
	 *
	 * @param attribute The name of the attribute as stored in the collection's `conf` JSON.
	 * @param value The value of the attribute.
	 */
	public setValue(attribute: string, value: any): Configuration {
		this.object[attribute] = value;

		return this;
	}

	public getValue(attribute: string): any {
		return this.object[attribute];
	}
}
