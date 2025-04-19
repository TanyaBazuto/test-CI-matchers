export default function sortHitPoints(players) {
    return players.sort((a, b) => (a.health < b.health ? 1 : -1));
}
