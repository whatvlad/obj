// for(let x = 1; x < 101; x++){
// 	console.log(x)
// }

// for(let x = 100; x > 0; x--){
// 	console.log(x)
// }

// for(let x = 2; x < 101 ;x += 2){
// 	document.write(x + " ")
// 	console.log(x)
// }

// let arr = []
// for(i = 0; i < 10; i++){
// 	arr[i] = "x"
// }
// console.log(arr)
// document.write(arr)

// let arr = []
// for(let i = 1; i < 11; i++){
// 	arr.push(i)
// }
// console.log(arr)
// document.write(arr)

// let arr = []
// for(i = 0; i < 10; i++){
// 	arr.push(Math.random().toFixed(2))
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for(i = 0; i < 8; i++){
// 	if(arr[i] == 5){
// 		alert("Есть")
// 	}
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// a = 0
// for(i = 0; i < 10; i++){
// 	a += arr[i]
// }
// console.log(a)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = 0
for(i = 0; i < 10; i++){
	a+= arr[i]
	sr = a / arr[i]
}
document.write(sr)