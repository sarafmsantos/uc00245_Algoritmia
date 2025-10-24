import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

variavelGlobal: string = "";
variavelGlobal2: string;

  ngOnInit(): void {
    let teste = '';
    const nome = '';

    this.exemploVariaveisETipos();
    this.exemploVariaveisETipos2();
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