# Kodluyoruz
## Insertion Sort 
- 2.elaman olan 27 22'den büyük yerinde kalır  [22,27,16,2,18,6]
- 3.eleman olan 16 27den ve 22den küçük [16,22,27,2,18,6]
- 4.eleman olan 2 önündeki tüm elemanlardan küçük [2,16,22,27,18,6]
- 5.eleman olan 18 27 ve 22 den küçük [2,16,18,22,27,6]
- 6.eleman olan 6 27,22,18 ve 16dan küçük [2,6,16,18,22,27]  

## Big-O
- θ(n^2) 

## Time Complexity
- dizinin sıralanmış hali : [2,6,16,18,22,27]
- Average case

## Selection Sort
- [7,3,5,8,2,9,4,15,6]
1. ilk eleman dizinin diğer elemanlarından en küçüğü ile karşılaştırılır.Büyükse yer değiştirir.ilk eleman sabitlenir.
- [2,3,5,8,7,9,4,15,6]
2. ikinci eleman ile dizinin diğer elemanlarından (sabitlenen hariç) en küçüğü karşılaştırılır. büyükse yer değiştirilir. ikinci eleman sabitlenir. 
- [2,3,5,8,7,9,4,15,6]
3. aynı mantıkla ; 
- [2,3,4,8,7,9,5,15,6]
4. [2,3,4,5,7,9,8,15,6]
