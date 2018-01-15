const production = process.env.NODE_ENV === 'production'
let api

if (!production) {
  api = {
    'client': process.env.API_URL || 'http://localhost:3004',
    'server': process.env.API_URL || 'http://localhost:3004'
  }
} else {
  api = {
    'client': process.env.API_URL || 'http://localhost:3004',
    'server': process.env.API_URL || 'http://localhost:3004'
  }
}

export default api
