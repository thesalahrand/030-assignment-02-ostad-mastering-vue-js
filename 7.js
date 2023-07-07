const getAddressCity = (address) => address?.city || 'Unknown'

console.log(getAddressCity({ street: '123 Main St', country: 'USA' }))
console.log(
  getAddressCity({ street: '123 Main St', city: 'Barishal', country: 'USA' })
)
