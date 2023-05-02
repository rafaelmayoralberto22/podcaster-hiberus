import { isEpisodesType, pastDays } from "./global";
import { episodes } from "./tests";

describe("global utils", () => {
  it("pastDays test ", () => {
    const today = new Date();
    const milisecondOfDay = 86400000;

    const here = pastDays(today);
    const onePastDay = pastDays(new Date(today.getTime() + milisecondOfDay));
    const twoPastDay = pastDays(
      new Date(today.getTime() + milisecondOfDay * 2)
    );

    expect(here).toEqual(0);
    expect(onePastDay).toEqual(1);
    expect(twoPastDay).toEqual(2);
  });

  it("isEpisodesType test ", () => {
    const result = isEpisodesType({ resultCount: 0, results: [] });
    const notResult = isEpisodesType({
      info: {
        img: "http://icon.jpg",
        title: "Title",
        author: "Autor",
        description: "Description",
        link: "podcast/2",
      },
      episodes,
    });

    expect(result).toBeTruthy();
    expect(notResult).not.toBeTruthy();
  });
});
