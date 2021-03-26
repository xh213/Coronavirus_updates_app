export class TableData
{
    ID: string;
    Country : string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
    Premium: Object;


    constructor(ID,Country,CountryCode,Slug,NewConfirmed,TotalConfirmed,NewDeaths,TotalDeaths,NewRecovered,TotalRecovered,Date,Premium)
    {
      this.ID = ID;
      this.Country = Country;
      this.CountryCode = CountryCode;
      this.Slug = Slug;
      this.NewConfirmed = NewConfirmed;
      this.TotalConfirmed = TotalConfirmed;
      this.NewDeaths = NewDeaths;
      this.TotalDeaths = TotalDeaths;
      this.NewRecovered = NewRecovered;
      this.TotalRecovered = TotalRecovered;
      this.Date = Date;
      this.Premium = Premium;
    }
}
