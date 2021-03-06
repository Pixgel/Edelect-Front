import { Usuario } from "src/app/auth/shared/usuario.model";

export class Test{
  idTest:number;
  description:string;
  fecha:string;
  usuario:Usuario;
  preguntas:Pregunta[];
}

export class Pregunta{
  idPregunta:number
  contenido:string
  respuesta:Respuesta[]
}

export class Respuesta{
  idRespuesta:number
  contenidoRespuesta:string
  select:boolean
  pregunta:Pregunta[]
}

export class Carrera{
  idCarrera:number
  nombreCarrera:string
  perfil:string
  descripcionDeCarrera:string
  tasaDeEmpleabilidad:number
  salarioPromedio:number
}

