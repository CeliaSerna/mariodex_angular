import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MarioService } from './mario.service';

describe('MarioService', () => {
  let service: MarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarioService]
    });
    service = TestBed.inject(MarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debe recuperar la lista de personajes (GET)', () => {
    const mockPersonajes = [
      { id: 1, nombre: 'Mario', tipo: 'Protagonista' },
      { id: 2, nombre: 'Luigi', tipo: 'Secundario' }
    ];

//service.getPokemons().subscribe(personajes => {
 //     expect(personajes.length).toBe(2);
  //    expect(personajes).toEqual(mockPersonajes);
 //   });

    // Simulamos la llamada a tu API (ajusta la URL a la que uses)
    const req = httpMock.expectOne('http://localhost:8000/personajes/crear'); 
    expect(req.request.method).toBe('GET');
    req.flush(mockPersonajes); // Enviamos los datos ficticios
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no queden peticiones colgadas
  });
});