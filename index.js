function test1() {
  console.log("tes1");
  console.log("1");
  console.log("2");
  console.log("3");
}

function test2() {
  console.log("test2");
  setTimeout(() => console.log("1"), 0);
  console.log("2");
  console.log("3");
}

function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      resolve(xmlHttp);
    }
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

// test1();
// test2();

const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

const promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

const promise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

// Promise chaining example

// currentPromise
//   .then((data) => {
//     // console.log(data);
//     document.getElementById("img_1").setAttribute("src", data.responseURL);
//     return promise2;
//   })
//   .then((data) => {
//     // console.log(data);
//     document.getElementById("img_2").setAttribute("src", data.responseURL);
//     return promise3;
//   })
//   .then((data) => {
//     // console.log(data);
//     document.getElementById("img_3").setAttribute("src", data.responseURL);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// Async/Await example

const executeAsync = async () => {
  const response = await promise2;
  console.log(response);
  document.getElementById("img_1").setAttribute("src", response.responseURL);
  const response2 = await promise3;
  console.log(response2);
  document.getElementById("img_2").setAttribute("src", response2.responseURL);
  const response3 = await currentPromise;
  console.log(response3);
  document.getElementById("img_3").setAttribute("src", response3.responseURL);
};

executeAsync();

// httpGetAsync("https:/picsum.photos/200/300", (data) => {
//   document.getElementById("img_1").setAttribute("src", data.responseURL);

//   httpGetAsync("https:/picsum.photos/200/300", (data) => {
//     document.getElementById("img_2").setAttribute("src", data.responseURL);

//     httpGetAsync("https:/picsum.photos/200/300", (data) => {
//       document.getElementById("img_3").setAttribute("src", data.responseURL);
//     });
//   });
// });

// console.log("Promise");
// console.log("new Promise(executor)"); //Moi khoi tao
// console.log("executor: resolve, reject"); //Executor la mot ham nhan 2 tham so
// console.log("resolve: tra ve ket qua thanh cong");
// console.log("reject: tra ve ket qua that bai"); //Reject la mot ham nhan 1 tham so

// const currentPromise = new Promise((resolve, reject) => {
//   let condition = false; // Giả sử có một điều kiện nào đó
//   if (condition) {
//     setTimeout(() => {
//       resolve("Ket qua thanh cong");
//     }, 3000);
//   } else {
//     reject("Ket qua that bai");
//   }
// });

// currentPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
