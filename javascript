Konzept: 

Syntax Parser: 
Ein Parser ist ein Computerprogramm, 
das in der Informatik für die Zerlegung und Umwandlung einer Eingabe in ein 
für die Weiterverarbeitung geeigneteres Format zuständig ist.

Lexical Environment: 
Wenn wir über Lexical Environment sprechen, reden wir darüber 
WO es geschrieben steht und was es UMGIBT.

Executional Context (EC):
ist definiert als die Umgebung, in der JavaScript-Code ausgeführt wird. 
Mit Umgebung meine ich den Wert von diesem, Variablen, Objekten und Funktionen, 
auf die JavaScript-Code Zugriff hat, stellt seine Umgebung dar.

Executional Context in JavaScript beinhalten drei Typen:

Globaler Executional Context (GEC): 
Dies ist der standardmäßige Ausführungskontext, 
in dem der JS-Code seine Ausführung beginnt, 
wenn die Datei zum ersten Mal im Browser geladen wird. 
Der gesamte globale Code wird im Rahmen der globalen Ausführung ausgeführt. 
Der globale Ausführungskontext kann nicht mehr als einer sein, 
da für die Ausführung von JS-Code nur eine globale Umgebung möglich ist.

Funktionaler Executional Context (FEC): 
Der funktionale Ausführungskontext ist definiert als der Kontext, 
der durch die Ausführung von Code innerhalb einer Funktion erzeugt wird. 
Jede Funktion hat ihren eigenen Ausführungskontext. Es kann mehr als eine sein. 
Funktionale Ausführungskontexte haben Zugriff auf den gesamten Code des globalen Ausführungskontexts. 
Wenn die JS-Engine beim Ausführen des globalen Ausführungskontextcodes einen Funktionsaufruf findet, 
erstellt sie einen neuen funktionalen Ausführungskontext für diese Funktion. Im Browser-Kontext, 
wenn der Code im Strickmodus ausgeführt wird, ist dieser Wert undefiniert, 
ansonsten ist es ein Fensterobjekt im Kontext der Funktionsausführung.

Executional Context-Stack (ECS): 
Execution Context Stack ist eine Stack-Datenstruktur, 
um alle Ausführungs-Stacks zu speichern, die während der Ausführung des JS-Codes erstellt wurden. 
Der globale Ausführungskontext ist standardmäßig im Executional Context-Stack vorhanden und 
befindet sich am unteren Ende des Stapels. Wenn JS-Engines beim Ausführen des globalen 
Ausführungskontextcodes einen Funktionsaufruf finden, erstellt sie einen funktionalen 
Executional Context dieser Funktion und verschiebt diesen Funktionsausführungskontext 
auf den Stapel des Executional Context. Die JS-Engine führt die Funktion aus, deren 
Executional Context oben im Stapel des Executional Context steht. Sobald der gesamte 
Code der Funktion ausgeführt wurde, öffnen die JS-Engines den Ausführungskontext dieser 
Funktion und starten die Ausführung der darunter liegenden Funktion.

JS-Engine:
Global Object      this         Outer Environment

                YOUR CODE

---
Name Value/Pair
var car = "Fiat";

Object:
Objekte sind auch Variablen. Objekte können jedoch viele Werte (Values) enthalten.
var car = {type:"Fiat", model:"500", color:"white"};

JavaScript-Objekte sind Container für benannte Werte, die als properties oder Methoden bezeichnet werden.
Die name:values-Paare in JavaScript-Objekten werden als Properties bezeichnet:
Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue

Sie können auf Objekteigenschaften auf zwei Arten zugreifen:
objectName.propertyName
oder
objectName["propertyName"]

---

Creation Phase:
Zeile für Zeile liest und belegt JS in den Memory/Speicher
Execution Phase: 
Die Phase an der JS den Code ausspielt. 



