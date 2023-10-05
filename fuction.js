function fromYtoO(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[i].age > array[j].age) {
				let tmp = array[j];
				array[j] = array[i];
				array[i] = tmp;
			}
		}
	}
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].surname + " " + array[i].age);
	}
}
