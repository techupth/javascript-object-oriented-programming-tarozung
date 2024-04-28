class Notification { 
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
      }
}

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
      }
 }

 const emailNoti = new EmailNotification("AA", "12.00", "Hello", "123@mail.com");
 emailNoti.send();

 const smsNoti = new SMSNotification("000", "10.00", "Hi", "081246455");
 smsNoti.send();