# Cvičení 4 - Řidiči

Jako výchozí bod pro tento příklad použije,e hotový kód z předchozího Cvičení 3 - Kontakty. Pokud jsi cvičení zdárně dokončila, měla bys mít aplikaci, která zobrazuje kontakty podle props předaných do komponenty Contact.

1. Uprav komponentu `Contact` tak, aby podle věku osoby zobrazovala na konci ještě odstavec s textem:

	```html
	<p class="adulthood">je dospělá, může řídit</p>
	```

	Nebo v případě, že je osobě méně než 18 let, tak:
	```html
	<p class="adulthood">není dospělá, nemůže řídit</p>
	```

1. Vylepši komponentu tak, že pod text umístíš ještě vhodnou ikonu:

	![Může řídit](can-drive.png) ![Nemůže řídit](cant-drive.png)

	Obrázky si můžeš stáhnout a zkopírovat do projektu nebo je do stránky napojit přímo z internetu pomocí následujících adres:
	```
	https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-04/main/cviceni-04/can-drive.png
	```
	```
	https://raw.githubusercontent.com/Czechitas-React-podklady/React-lekce-04/main/cviceni-04/cant-drive.png
	```
