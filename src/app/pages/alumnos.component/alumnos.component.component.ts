import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import {Table, TableModule} from 'primeng/table';
import {BottonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import {SelectModule} from 'primeng/select';
import {DialogModule} from 'primeng/dialog';
import {TagModule} from 'primeng/tag';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ApiResponse} from '@/app/models/api-repsonse.model';
import { Alumno, AlumnoDTO } from '@/app/models/alumno.model';
import {Carrera} from '@/app/models/carrera.model';
import {AlumnoService} from '@/app/services/alumno.service';
import {CarreraService} from '@/app/services/carerra.service.service';



@Component({
  selector: 'app-alumnos.component',
  standalone: true,
  imports: [DatePipe, FormsModule, TableModule, BottonModule, ToastModule, ToolbarModule, InputTextModule, SelectModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss',
  providers: [MessageService, ConfirmationService]
})
export class Alumnos implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
