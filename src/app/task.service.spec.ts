import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpClientTestingModule], 
        providers: [TaskService]
    });
  });

  it('should be created', () => {
  	const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
