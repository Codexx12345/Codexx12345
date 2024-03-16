const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=magbalik&type=track', {
    headers: {
    'Authorization': 'Bearer BQBII3H8xPEZ38ds3KQvEN7jDBZaUc-Efp4Y1dRJaBrGueFMlkO_9KwXdby1mmxuhiVAcZJrU1-7wgSy4I_Sy4cM5CcNWIp0PvB7XMqHSnMqR8NbUxvDHSbJ2btZA2u4sMNk7jx3Q69eyaTFj_5q6L1xQG-Vaq4-gWYDqeeLImR84DBzNkTp-1qkU5-q0ebu2t98c-dXo_iyFI0dwIs'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})
