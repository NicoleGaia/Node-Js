<h1>Desafio de projeto Mario Kart.JS</h1>
<table>
  <tr>
    <td>
      <img src="docs/header.gif" alt="Mario Kart" width="200">
    </td>
    <td>
        <b>Objetivo:</b>
        <p>da desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
    </td>
  </tr>
</table>
<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="Simulador-Mario-Kart/docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 4</p>
            <p>Manobrabilidade: 3</p>
            <p>Poder: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="Simulador-Mario-Kart/docs/peach.gif" alt="Peach" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="Simulador-Mario-Kart/docs/yoshi.gif" alt="Yoshi" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="Simulador-Mario-Kart/docs/bowser.gif" alt="Bowser" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 5</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="Simulador-Mario-Kart/docs/luigi.gif" alt="Luigi" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="Simulador-Mario-Kart/docs/dk.gif" alt="DK" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: justify;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
    </tr>
</table>
<h3>🎯 Regras & mecânicas:</h3>
<h4>Jogadores: </h4>
<p>O Computador deve receber dois personagens para disputar a corrida em um objeto cada</p>
<h4>Pistas: </h4>
<ul>
    <li>Os personagens irão correr em uma pista aleatória de 5 rodadas</li>
    <li>A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</li>
    <ul>
        <li>Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</li>
        <li>Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</li>
        <li>Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</li>
        <li>Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</li>
    </ul>
</ul>
<h4>Condição de vitória:</h4>
<p>Ao final, vence quem acumulou mais pontos</p>
