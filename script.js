if (document.getElementById('map')) {
    const map = L.map('map').setView([29.88848, -97.94648], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
        { coords: [29.88848, -97.94648], type: "Ramp" },
        { coords: [29.88901, -97.94772], type: "Automatic Door (JCM)" },
        { coords: [29.88853, -97.94689], type: "Automatic Door (RFM)" },
        { coords: [29.88925, -97.94795], type: "Automatic Door (JCM 2)" },
        { coords: [29.88814, -97.94655], type: "Automatic Door (SupSci 1)" },
        { coords: [29.88778, -97.94657], type: "Automatic Door (SupSci 2)" }
    ];

    locations.forEach(loc => {
        const icon = L.divIcon({
            className: 'custom-icon',
            html: `<div style="color: white; background-color: ${
                loc.type.includes('Ramp') ? 'green' : 'blue'
            }; border-radius: 50%; width: 20px; height: 20px; text-align: center; line-height: 20px;">
                    ${loc.type[0]}</div>`,
            iconSize: [20, 20]
        });

        L.marker(loc.coords, { icon })
            .addTo(map)
            .bindPopup(`<b>${loc.type}</b><br>Coordinates: ${loc.coords.join(', ')}`);
    });

    // Add a legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <strong>Legend</strong><br>
            <div><span style="background-color: green; display: inline-block; width: 12px; height: 12px; margin-right: 5px;"></span>Ramp</div>
            <div><span style="background-color: blue; display: inline-block; width: 12px; height: 12px; margin-right: 5px;"></span>Automatic Door</div>
        `;
        return div;
    };
    legend.addTo(map);
}
