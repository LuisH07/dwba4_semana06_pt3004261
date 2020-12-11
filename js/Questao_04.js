class Aluno{
  constructor(nome, sobrenome, nota1, nota2){
    this.primeiroNome = nome;
    this.segundoNome = sobrenome;
    this.primeiraNota = nota1;
    this.segundaNota = nota2;
  }

  nomeCompleto(){
    return this.primeiroNome + " " + this.segundoNome;
  }

  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao(){
    if(this.media()>6){
      return "Aprovado";
    }else{
      return "Reprovado";
    }
  }
}

function criarAlunos(){
  var alunos = [new Aluno('Luis', 'Malafaia', 10, 10),
                new Aluno('Danielle', 'de Souza', 10, 9),
                new Aluno('Sandra', 'Aparecida', 9, 9),
                new Aluno('Luis', 'Carlos', 9, 8),
                new Aluno('Thaila', 'Oliveira', 1, 2)];
  alunos.forEach(mostrarAlunos);
}

function mostrarAlunos(item){
  alert("Nome Completo: " + item.nomeCompleto() + 
        "\nMédia: " + item.media() +
        "\nSituação: " + item.situacao());
}

criarAlunos();