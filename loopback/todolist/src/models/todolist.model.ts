import {Entity, model, property} from '@loopback/repository';

@model()
export class Todolist extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  task: string;

  @property({
    type: 'boolean',
    required: true,
  })
  completed: boolean;


  constructor(data?: Partial<Todolist>) {
    super(data);
  }
}

export interface TodolistRelations {
  // describe navigational properties here
}

export type TodolistWithRelations = Todolist & TodolistRelations;
