
setTimeout(function () {
    document.body.classList.toggle('preload');
}, 500);

let current_play_button = null

let toggle_iframe = (project_id) => {
    let player = document.getElementById('player')
    let project = document.getElementById(project_id)
    let url = project.querySelector('a').href
    let button = project.querySelector('.play-button')

    if (player.getAttribute('src') == url) {
        player.setAttribute('src', 'about:blank')
        show_description(project_id, false)

        current_play_button.innerHTML = '&#9654;'
        current_play_button = null
    } else {
        player.setAttribute('src', url)
        player.scrollIntoView({ behavior: "smooth", block: "center" })
        show_description(project_id, true)

        if (current_play_button) current_play_button.innerHTML = '&#9654;'
        button.innerHTML = '&#9208;'
        current_play_button = button
    }
}

let show_description = (project_id, one_way_toggle) => {
    let project = document.getElementById(project_id)
    let description = project.querySelector('.project-description')
    if (!(description.classList.contains('show') == one_way_toggle)) {
        let button = project.querySelector('.description-button')
        let toggle = description.classList.toggle('show')
        button.innerHTML = toggle ? '&#10134;' : '&#10133;'
    }
}