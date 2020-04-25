const initialTime = performance.now();
const logTime = (marker?: string) => {
  const time = performance.now() - initialTime
  console.log(`Elapsed: ${time} ${marker ? marker : ''}`);
  return time;
}

const upload = (data: string) => (
  new Promise((res, rej) => {
    logTime();
    setTimeout(res, 1000, `Uploaded photo of: ${data}`)
  })
);

const users = ['Joe', 'Mark', 'Bob'];

const uploadedWithAwaitInMap = users.map(async user => await upload(user) );
Promise.all(uploadedWithAwaitInMap).then( data => {
  logTime('with async await in map'); //?
  console.log(data);
})

const uploadedWithPromiseAll = async() => await Promise.all(users.map( user => upload(user)));
uploadedWithPromiseAll().then( data => {
  logTime('with Promise.all'); //?
  console.log(data);
})

const uploadedSequentially = async () => {
  for(const user of users) {
    const result = await upload(user);
    console.log(result);
    logTime();
  }
}

uploadedSequentially().then(() => {
  logTime('sequentially with for of loop'); //?
})
