const destructureExample = ({ name, age }, [itemAtIdx0, , itemAtIdx2]) => {
  return { name, age }
}

const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40]
console.log(destructureExample(obj, arr))
