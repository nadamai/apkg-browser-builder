import { Object } from '../abstract';
import { ReviewCardConfig as ReviewCardConfigObject } from '../model';

export class ReviewCardConfig extends Object<ReviewCardConfigObject> {
	protected object: ReviewCardConfigObject = {
		bury: false,
		ease4: 0,
		fuzz: 0,
		ivlFct: 0,
		maxIvl: 0,
		minSpace: 0,
		perDay: 20
	};

	public getBury(): boolean {
		return this.object.bury;
	}

	public setBury(bury: boolean): ReviewCardConfig {
		this.object.bury = bury;

		return this;
	}

	public getEasynessFactor(): number {
		return this.object.ease4;
	}

	public setEasynessFactor(factor: number): ReviewCardConfig {
		this.object.ease4 = factor;

		return this;
	}

	public getFuzz(): number {
		return this.object.ease4;
	}

	public setFuzz(fuzz: number): ReviewCardConfig {
		this.object.fuzz = fuzz;

		return this;
	}

	public getMultiplicationIntervalsFactor(): number {
		return this.object.ivlFct;
	}

	public setMultiplicationIntervalsFactor(factor: number): ReviewCardConfig {
		this.object.ivlFct = factor;

		return this;
	}

	public getMaximumInterval(): number {
		return this.object.maxIvl;
	}

	public setMaximumInterval(interval: number): ReviewCardConfig {
		this.object.maxIvl = interval;

		return this;
	}

	public getCardsPerDay(): number {
		return this.object.perDay;
	}

	public setCardsPerDay(cards: number): ReviewCardConfig {
		this.object.perDay = cards;

		return this;
	}
}
