export type Configuration = {
	// "curDeck": "The id (as int) of the last deck selected (during review, adding card, changing the deck of a card)",
	// "activeDecks": "The list containing the current deck id and its descendant (as ints)",
	// "newSpread": "In which order to view to review the cards. This can be selected in Preferences>Basic. Possible values are:
	//   0 -- NEW_CARDS_DISTRIBUTE (Mix new cards and reviews)
	//   1 -- NEW_CARDS_LAST (see new cards after review)
	//   2 -- NEW_CARDS_FIRST (See new card before review)",
	// "collapseTime": "'Preferences>Basic>Learn ahead limit'*60. If there is no more card to review now but next card in learning is in less than collapseTime second, show it now.
	// If there are no other card to review, then we can review cards in learning in advance if they are due in less than this number of seconds.",
	// "timeLim": "'Preferences>Basic>Timebox time limit'*60. Each time this number of second elapse, anki tell you how many card you reviewed.",
	// "estTimes": "'Preferences>Basic>Show next review time above answer buttons'. A Boolean."
	// "dueCounts": "'Preferences>Basic>Show remaining card count during review'. A Boolean."
	// "curModel": "Id (as string) of the last note type (a.k.a. model) used (i.e. either when creating a note, or changing the note type of a note).",
	// "nextPos": "This is the highest value of a due value of a new card. It allows to decide the due number to give to the next note created. (This is useful to ensure that cards are seen in order in which they are added.",
	// "sortType": "A string representing how the browser must be sorted. Its value should be one of the possible value of 'aqt.browsers.DataModel.activeCols' (or equivalently of 'activeCols'  but not any of ('question', 'answer', 'template', 'deck', 'note', 'noteTags')",
	// "sortBackwards": "A Boolean stating whether the browser sorting must be in increasing or decreasing order",
	// "addToCur": "A Boolean. True for 'When adding, default to current deck' in Preferences>Basic. False for 'Change deck depending on note type'.",
	// "dayLearnFirst": "A Boolean. It corresponds to the option 'Show learning cards with larger steps before reviews'. But this option does not seems to appear in the preference box",
	// "newBury": "A Boolean. Always set to true and not read anywhere in the code but at the place where it is set to True if it is not already true. Hence probably quite useful.",
	// "lastUnburied":"The date of the last time the scheduler was initialized or reset. If it's not today, then buried notes must be unburied. This is not in the json until scheduler is used once.",
	// "activeCols":"the list of name of columns to show in the browser. Possible values are listed in aqt.browser.Browser.setupColumns. They are:
	// 'question' -- the browser column'Question',
	// 'answer' -- the browser column'Answer',
	// 'template' -- the browser column'Card',
	// 'deck' -- the browser column'Deck',
	// 'noteFld' -- the browser column'Sort Field',
	// 'noteCrt' -- the browser column'Created',
	// 'noteMod' -- the browser column'Edited',
	// 'cardMod' -- the browser column'Changed',
	// 'cardDue' -- the browser column'Due',
	// 'cardIvl' -- the browser column'Interval',
	// 'cardEase' -- the browser column'Ease',
	// 'cardReps' -- the browser column'Reviews',
	// 'cardLapses' -- the browser column'Lapses',
	// 'noteTags' -- the browser column'Tags',
	// 'note' -- the browser column'Note',
	// The default columns are: noteFld, template, cardDue and deck
	// This is not in the json at creation. It's added when the browser is open.
	//  "
};
