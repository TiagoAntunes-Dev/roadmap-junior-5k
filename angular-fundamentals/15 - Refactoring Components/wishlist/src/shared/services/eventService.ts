import { Observable, Subject } from 'rxjs';

class EventService {
    private subject = new Subject();
    // Ideia é criar um debugger para ver se o evento está sendo emitido corretamente
    emit(eventName: string, payload: any) {
        this.subject.next({ eventName, payload });
    }

    listen(eventName: string, callback: (event: any) => void) {
        // Ideia é criar um debugger para ver se o evento está sendo emitido corretamente
        this.subject.asObservable().subscribe((nextObj: any) => {
            if (eventName === nextObj.eventName) {
                callback(nextObj.payload);
            }
        });
    };
};

export default new EventService();