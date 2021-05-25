import Intro from './routes/Intro.svelte';
import Scan from './routes/Scan.svelte';
import Results from './routes/Results.svelte';
import Submit from './routes/Submit.svelte';
import Thanks from './routes/Thanks.svelte';

import NotFound from './routes/NotFound.svelte';

export default {
    '/': Intro,
    '/scan': Scan,
    '/results': Results,
    '/submit': Submit,
    '/thanks': Thanks,
    '*': NotFound
};
