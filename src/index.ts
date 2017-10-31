import * as ko from 'knockout';

class Campaign {
  publicId: string;
  budget: KnockoutObservable<number> | KnockoutObservableArray<number>;
  currency: KnockoutObservable<string> | KnockoutObservableArray<string>;
  isMultiCurrency: KnockoutComputed<boolean>;
  startDate: KnockoutObservable<string>;
  endDate: KnockoutObservable<string>;

  constructor(publicId: string,
              budget: number | Array<number>,
              currency: string | Array<string>,
              startDate: string,
              endDate: string) {

    this.publicId = publicId;
    this.budget =
      Array.isArray(budget) ? ko.observableArray(budget) : ko.observable(budget);
    this.currency =
      Array.isArray(currency) ? ko.observableArray(currency) : ko.observable(currency);
    this.startDate = ko.observable(startDate);
    this.endDate = ko.observable(endDate);
    this.isMultiCurrency = ko.computed(function () {
      return Array.isArray(this.budget);
    }, this);
  }
}

ko.applyBindings(new Campaign('C12343', [100, 200], ['USD', 'CAD'],
  '2017-01-01', '2017-12-31'));