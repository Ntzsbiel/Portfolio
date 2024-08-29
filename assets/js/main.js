
function importProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkedin

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

}


function importSoftSkills(profileData) {
    const softskills = document.getElementById('profile.skills.softSkills')

    softskills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function importHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => ` 
         <li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
         </li>`)
        .join('')

}

function importLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `

        <h3>
        <li>${languages}</li>
        </h3>`
    )
        .join('')
}

function importPortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return`
        <li>
            <h3 ${project.name}</h3>
            <a href="${project.url}" target_blank"> ${project.url}</a>
            
        </li>
    ` }) .join('')
}

(async () => {
    const profileData = await fetchProfileData()
    importProfileInfo(profileData)
    importSoftSkills(profileData)
    importHardSkills(profileData)
    importLanguages(profileData)
    importPortfolio(profileData)
})()