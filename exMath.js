let circleRadius = prompt ('Εισάγετε την ακτίνα του κύκλου ');

let circumFerence,circleArea,PI;
PI = 3.14159265; 
//Για να υπολογίσουμε την περίμετρο του κύκλου: Περίμετρος = 2 · π · R  
circumFerence = 2 * PI * circleRadius ;
//Για να υπολογίσουμε τo εμβαδό του κύκλου: Εμβαδό = π · R2
circleArea  = PI * (circleRadius**2);

greeting1 = 'Η περίμετρος του κύκλου ειναι:';
greeting2 = '\nΤο εμβαδό του κύκλου είναι:';
//Για να εμφανίσουμε pop-up μήνυμα κάνουμε χρήση της alert
alert( greeting1 + ' ' + circumFerence + greeting2 + ' ' + circleArea  );

