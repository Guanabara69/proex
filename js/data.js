const DataManager = {
    // Pets
    getPets: () => JSON.parse(localStorage.getItem('vetconnect_pets')) || [],
    savePet: (pet) => {
        const pets = DataManager.getPets();
        pets.push(pet);
        localStorage.setItem('vetconnect_pets', JSON.stringify(pets));
    },
    getPetsByTutor: (tutorId) => DataManager.getPets().filter(p => p.tutorId === tutorId),
    
    // Consultas
    getAppointments: () => JSON.parse(localStorage.getItem('vetconnect_appointments')) || [],
    saveAppointment: (app) => {
        const apps = DataManager.getAppointments();
        apps.push(app);
        localStorage.setItem('vetconnect_appointments', JSON.stringify(apps));
    },
    getAppointmentsByPet: (petId) => DataManager.getAppointments().filter(a => a.petId === petId),
    
    // Vacinas
    getVaccines: () => JSON.parse(localStorage.getItem('vetconnect_vaccines')) || [],
    saveVaccine: (vac) => {
        const vacs = DataManager.getVaccines();
        vacs.push(vac);
        localStorage.setItem('vetconnect_vaccines', JSON.stringify(vacs));
    },
    getVaccinesByPet: (petId) => DataManager.getVaccines().filter(v => v.petId === petId),

    // Mensagens
    getMessages: () => JSON.parse(localStorage.getItem('vetconnect_messages')) || [],
    saveMessage: (msg) => {
        const msgs = DataManager.getMessages();
        msgs.push(msg);
        localStorage.setItem('vetconnect_messages', JSON.stringify(msgs));
    }
};

// Inicializar dados de exemplo se estiver vazio
if (DataManager.getPets().length === 0) {
    const samplePet = {
        id: 1,
        tutorId: 123, // Exemplo
        name: 'Rex',
        species: 'Cachorro',
        breed: 'Golden Retriever',
        age: 3,
        weight: 30,
        history: 'Saudável, gosta de correr.'
    };
    // DataManager.savePet(samplePet);
}
