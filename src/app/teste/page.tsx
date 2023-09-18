export const revalidate = 10;

const URL = "https://api.sofascore.com/api/v1/sport/football/events/live";

function getData() {
  return fetch(URL).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  });
}

export default async function Page() {
  const jogos = await getData();

  return (
    <h1>
      JOGOS
      <div>
        {jogos.events.map((jogo: any) => {
          return (
            <div className="flex flex-col gap-4 mb-6 border">
              <h1>TORNEIO : {jogo.tournament.name}</h1>
              <div>
                TIME A : {jogo.homeTeam.name} - {jogo.homeScore.current}
              </div>
              <div>
                TIME A : {jogo.awayTeam.name} - {jogo.awayScore.current}
              </div>
            </div>
          );
        })}
      </div>
    </h1>
  );
}
