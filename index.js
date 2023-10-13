let main = document.querySelector('.main');
const getUniversities = async ()=>{
    let response = await fetch('https://devilman-crybaby.onrender.com/api/v1');
    let data = await response.json();

    if (response.status !== 200){
        throw new Error('Error getting data')
    }
    return data;
};


const changeUI= (universities)=>{
    universities.map(university=>{
        let card = document.createElement('div');
        let logo = document.createElement('div');
        let span = document.createElement('span');
        card.classList.add('university-card');
        logo.classList.add('logo');
        logo.innerText= university.abbreviation[0].toUpperCase();
        let universityName = document.createElement('h3');
        let universityAbbreviation = document.createElement('p');
        let universityLink = document.createElement('a');
        universityLink.setAttribute('href',`${university.website_link}`);
        universityLink.setAttribute('target','_blank');
        universityName.innerText = university.name;
        universityAbbreviation.innerText= university.abbreviation;
        universityLink.innerText ='Visit Link'

        card.append(logo,universityName,universityAbbreviation,universityLink,span);

        main.append(card);

        console.log(university.name);
    });
}

getUniversities().then(data=>{
    console.log(data);
    changeUI(data);
}).catch(err=>{
    console.log(err)
});