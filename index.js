/**Ojetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" **/

function getEloRanking(victories, defeats) {
  const balance = victories - defeats

  let elo;

  if (balance > 100) {
    elo = "Immortal"
  } else if (balance > 90) {
    elo = "Legend"
  } else if (balance > 80) {
    elo = "Diamond"
  } else if (balance >= 50) {
    elo = "Gold"
  } else if (balance >= 20) {
    elo = "Silver"
  } else if (balance >= 10) {
    elo = "Bronze"
  } else {
    elo = "Iron"
  }

  console.log(`The hero has a balance of **${balance}** and has the **${elo}** elo.`)
}
