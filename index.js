import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import random from 'random';

const FILE_PATH = './data.json';
const git = simpleGit();

const RANGES = [
    { start: '2025-07-27', end: '2025-12-20' },
    { start: '2026-01-04', end: '2026-04-03' }
];

// Generates varied commit count per day to create 4 levels of green shade + empty days
function getCommitCountForDay() {
    const rand = random.float(0, 1);
    if (rand < 0.15) {
        return 0;                  // 15% chance: 0 commits (Black/Empty)
    } else if (rand < 0.50) {
        return random.int(1, 2);   // 35% chance: 1-2 commits (Dark Green - Level 1)
    } else if (rand < 0.75) {
        return random.int(3, 6);   // 25% chance: 3-6 commits (Medium Green - Level 2)
    } else if (rand < 0.90) {
        return random.int(7, 12);  // 15% chance: 7-12 commits (Bright Green - Level 3)
    } else {
        return random.int(13, 22); // 10% chance: 13-22 commits (Brightest Green - Level 4)
    }
}

const commitDates = [];

for (const range of RANGES) {
    let current = moment(range.start);
    const end = moment(range.end);
    
    while (current.isBefore(end) || current.isSame(end, 'day')) {
        const count = getCommitCountForDay();
        for (let i = 0; i < count; i++) {
            const hour = random.int(8, 23);
            const minute = random.int(0, 59);
            const second = random.int(0, 59);
            const dateStr = current.clone().hour(hour).minute(minute).second(second).format();
            commitDates.push(dateStr);
        }
        current.add(1, 'day');
    }
}

async function makeCommits() {
    console.log(`🎨 Creating ${commitDates.length} multi-toned commits with varied shades...`);
    
    // Switch to a fresh orphan branch to replace previous monotonous commits cleanly
    try {
        await git.checkout({ '--orphan': 'temp_branch' });
    } catch (e) {
        console.log('Using current branch');
    }
    
    for (let i = 0; i < commitDates.length; i++) {
        const DATE = commitDates[i];
        const data = { date: DATE, commitNumber: i + 1 };
        
        await jsonfile.writeFile(FILE_PATH, data);
        await git.add([FILE_PATH]).commit(`Varied commit #${i + 1} - ${DATE}`, { '--date': DATE });
        
        if ((i + 1) % 100 === 0 || i + 1 === commitDates.length) {
            console.log(`✅ Progress: ${i + 1}/${commitDates.length} commits created.`);
        }
    }
    
    // Rename branch to main and force push
    console.log('🔄 Updating main branch...');
    try {
        await git.branch(['-M', 'main']);
    } catch (err) {}

    console.log('📤 Force pushing multi-toned commits to remote repository...');
    await git.push(['-f', 'origin', 'main']);
    console.log('🎉 Done! GitHub contribution graph updated with multi-shade green tones.');
}

makeCommits();
