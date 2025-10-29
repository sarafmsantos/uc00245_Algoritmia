import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Aula01',
  imports: [],
  templateUrl: './Aula01.html',
  styleUrl: './Aula01.css'
})
export class Home implements OnInit {

variavelGlobal: string = "";
variavelGlobal2!: string;
variavelGlobal3: number = 0;
arrayGlobal: string[] = [];

  ngOnInit(): void {
    let teste = '';
    const nome = '';
    
    this.exemploVariaveisETipos();
    this.exemploVariaveisEtipos2();
    this.exerciciosparafazer();
  }

// ======================================================
// 🔹 1. VARIÁVEIS E TIPOS DE DADOS
// ======================================================
exemploVariaveisETipos(): void {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:
 
    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = "São as que começam dom THIS."
 
    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
}

exemploVariaveisEtipos2 = () => {
 console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = 'São as que começam dom THIS.';
 
    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
  }

// ======================================================
// 🔹 2. OPERADORES ARITMÉTICOS
// ======================================================
exemploOperadoresAritmeticos(): void {
  console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
  console.log('--------------------------------');
 
  // 📘 Exemplo de código:
 
  let num1 = 10;
  let num2 = 3;
 
  console.log(num1 + num2); // Adição
  console.log(num1 - num2); // Subtração
  console.log(num1 * num2); // Multiplicação
  console.log(num1 / num2); // Divisão
  console.log(num1 % num2); // Resto da divisão
}
/***************************Exercícios *********************************/

exerciciosparafazer = () =>{
        // 💪 Exercício 1
    console.log(
      '👉 Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.'
    );
    let nome = "sara";
    let idade = 43;
    let ativo = false;

    console.log(nome);
    console.log(idade);
    console.log(ativo);

        // 💪 Exercício 2
    console.log(
      '👉 Exercício 2: Crie uma variável cidade e depois altere seu valor.'
    );
    let cidade = "Setúbal";
    console.log(cidade);

    cidade = "Torrão";
    console.log(cidade);

        // 💪 Exercício 3
    console.log(
      '👉 Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.'
    );
    let valor: any = 0;
    console.log(valor);
    valor = "sara";
    console.log(valor);
    valor = false;
    console.log(valor);

        // 💪 Exercício 4
    console.log(
      '👉 Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.'
    );
      let num1 = 23;
      console.log(num1);
      let num2 = 78;
      console.log(num2);
      console.log(num1 + num2);
      console.log(num2 - num1);

        // 💪 Exercício 5
    console.log(
      '👉 Exercício 5: Calcule a área de um retângulo (largura * altura).'
    );
      let largura = 30;
      console.log(largura);
      let altura = 20;
      console.log(altura);
      let area = largura * altura;
      console.log(area);

    // 💪 Exercício 6
    console.log('👉 Exercício 6: Mostre o resto da divisão de 20 por 6.'
    );
    let resto = 20 % 6;
    console.log(resto);
  }
}