# BoxingGame

```
git clone https://github.com/rudrakpatra/BoxingGame.git
cd BoxingGame/boxing-game
npm i   or    yarn
npm run dev   or    yarn dev

```

# Goals
- [x] setup a basic three interactive example
- [ ] make it a keyboard controlled boxing game (boxer)
- [ ] make it 2 player game
- [ ] publish#0
- [ ] use tensorflowjs posenet api to control the boxer
- [ ] publish#1
- [ ] polish the game
- [ ] polish the posenet (time to actually learn ML) or use hacks to better detect punches
- [ ] publish#2

# The Game
### stage1
two players will get connect via p2p.
imagine a video call with eachother but the players will use their boxing avatars.

the objective for each player is to attack by punching the avatar ( the other player) to get score
head hit will result in extra score.

### stage2
punches can be straight or uppercuts
head hit will knock other players view. (add physics in threejs)

### stage3
custom avatars
