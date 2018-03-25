import {Professor} from './professor.model';
export class Disciplina {
  nome: string;
  descricao: string;
  professor: Professor;
  codigo: number;
  date: Date;
  ativo: boolean;
  tipo: string;
  periodo: string;


  constructor(codigo: number, nome: string, descricao?: string, professor?: Professor, date?: Date, ativo?: boolean, tipo?: string, periodo?:string) {
    this.nome = nome;
    this.descricao = descricao;
    this.professor = professor;
    this.codigo = codigo;
    this.date = date;
    this.tipo = tipo;
    this.periodo =periodo;
  }
}
