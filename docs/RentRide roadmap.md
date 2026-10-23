Claude

Rentride roadmap · MD

# RentRide Roadmap

RentRide ekta frontend only React project, jekhane ride share driver der jonno gari rental er website banano hobe. Backend nai, data local JSON file theke ashe.

Stack: Vite, React, TypeScript, React Router, TanStack Query, Redux Toolkit, Context API, React Toastify, Framer Motion, GSAP.

## Project Structure

```
rentride/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── docs/
│   └── RentRide roadmap.md
├── public/
│   └── images/                 (gari ar hero er chhobi, lazy load hobe)
└── src/
    ├── main.tsx                (QueryClientProvider, ThemeProvider, BrowserRouter)
    ├── App.tsx                 (routes, Suspense, ToastContainer)
    ├── index.css               (CSS variables, light ar dark theme, basic styling)
    ├── types.ts                (Car ar Faq type)
    ├── api/
    │   ├── cars.ts             (mock fetch function)
    │   └── hooks.ts            (useCars, useFaqs, pore useSubmitBooking)
    ├── data/
    │   ├── cars.json
    │   └── faqs.json
    ├── store/                  (Step 6C)
    │   ├── index.ts            (Redux store, typed hooks)
    │   ├── bookingSlice.ts     (selected car, insurance, days)
    │   └── authSlice.ts        (logged in user, Step 7)
    ├── context/
    │   ├── ThemeCore.ts        (Theme type ar createContext)
    │   ├── ThemeProvider.tsx   (state, localStorage, data-theme)
    │   └── useTheme.ts         (custom hook)
    ├── animations/
    │   └── heroTimeline.ts     (GSAP timeline, Step 9)
    ├── components/
    │   ├── Navbar.tsx          (theme toggle button shoho)
    │   ├── Footer.tsx
    │   ├── CarCard.tsx         (pore React.memo diye)
    │   ├── CarList.tsx         (car er list ar empty message)
    │   ├── FilterBar.tsx       (type filter button, callback prop)
    │   ├── Toggle.tsx          (insurance on/off, Step 6C)
    │   ├── FaqList.tsx
    │   ├── Skeleton.tsx        (loading shimmer)
    │   └── ProtectedRoute.tsx  (login chhara Booking e jete dey na)
    └── pages/
        ├── Home.tsx
        ├── Fleet.tsx           (FilterBar ar CarList use kore)
        ├── Booking.tsx         (lazy load)
        ├── FaqPage.tsx
        ├── Login.tsx           (lazy load)
        └── Signup.tsx          (lazy load)
```

## Step Table

| Step | Ki shikhbe                                                       | File gulo                                                                     | Obostha |
| ---- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- |
| 1    | Vite, component, JSX, Fragment                                   | `App.tsx`, `Navbar.tsx`, `Footer.tsx`                                         | Done    |
| 2    | React Router, NavLink                                            | `main.tsx`, `Home.tsx`, `Fleet.tsx`, `FaqPage.tsx`                            | Done    |
| 3    | `useState`, props, list `map` ar `filter`, destructuring, spread | `types.ts`, `CarCard.tsx`, `Fleet.tsx`, `data/cars.json`                      | Done    |
| 4    | `useEffect`, dependency array, cleanup, `async` ar `await`       | `Fleet.tsx`                                                                   | Done    |
| 5    | TanStack Query, custom hook                                      | `api/cars.ts`, `api/hooks.ts`, `data/faqs.json`, `FaqPage.tsx`                | Done    |
| 6A   | Context API, custom hook, localStorage, CSS variables            | `ThemeCore.ts`, `ThemeProvider.tsx`, `useTheme.ts`, `Navbar.tsx`, `index.css` | Done    |
| 6B   | Lifting state up, callback pass kora, `useEffect` cleanup        | `FilterBar.tsx`, `CarList.tsx`, `Fleet.tsx`                                   | Done    |
| 6C   | Redux Toolkit, slice, typed hooks, rest props                    | `store/index.ts`, `bookingSlice.ts`, `Toggle.tsx`, `Booking.tsx`              | Baki    |
| 7    | Auth, protected route, Toastify                                  | `authSlice.ts`, `Login.tsx`, `Signup.tsx`, `ProtectedRoute.tsx`               | Baki    |
| 8    | Framer Motion er basic animation                                 | shob component e animation, notun file nai                                    | Baki    |
| 9    | GSAP cinematic scroll                                            | `animations/heroTimeline.ts`, `Home.tsx`                                      | Baki    |
| 10   | `useMemo`, `useCallback`, `React.memo`, lazy loading             | `Skeleton.tsx`, `public/images`                                               | Baki    |

`Footer.tsx` ar `FaqPage.tsx` er styling ar `Home.tsx` er design pore hobe, jokhon animation er step ashbe.

## Kon jinish kothay thake

| Jinish                                            | Kothay              | Keno                                                   |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------ |
| Fleet, car details, FAQ, booking submit           | TanStack Query      | Eta server data, caching ar loading nijei shamle       |
| Selected car, insurance toggle, days, login state | Redux Toolkit       | Eta client state, onek component e lage                |
| Dark ar light theme                               | Context API         | Choto global value, kom change hoy                     |
| Type filter (selectedType)                        | `useState` in Fleet | Shudhu Fleet er dui child e lage, tai lifting state up |
| Success ar error message                          | React Toastify      | Action er result dekhano                               |
| Hover, entrance, FAQ accordion, page transition   | Framer Motion       | Component level animation                              |
| Scroll linked cinematic section, pin, scrub       | GSAP ScrollTrigger  | Scroll er shathe bandha animation                      |

## Kon concept kon step e ashe

| Concept                | Kothay shikhlam ba shikhbo                                      |
| ---------------------- | --------------------------------------------------------------- |
| Mount, update, unmount | Step 4 (`useEffect`), Step 6B (title cleanup)                   |
| Dependency array       | Step 4, 6A (`[theme]`), 6B (`[]`)                               |
| Cleanup function       | Step 4 (`ignore` flag), 6B (document title), Step 9 (GSAP kill) |
| Lifting state up       | Step 6B (`selectedType` Fleet e)                                |
| Callback pass kora     | Step 6B (`onSelect`)                                            |
| Destructuring          | Step 3 theke (`{ car }`, `{ data: cars = [] }`)                 |
| Spread                 | Step 3 (`[...new Set()]`), Step 6C (reducer e immutable update) |
| Rest props             | Step 6C (`Toggle`)                                              |
| Context API            | Step 6A                                                         |
| Redux Toolkit          | Step 6C, Step 7                                                 |

## Notun file bhag kora er niyom

Ekta file e ekta kaj. Ekta file e component export korle oi file e hook ba constant export kora jay na, karon ESLint er `react-refresh/only-export-components` rule error dey. Tai Context er jonno `ThemeCore.ts` (context ar type), `ThemeProvider.tsx` (component), `useTheme.ts` (hook) alada file e rakha hoyeche. Redux e o same bhabe store, slice ar hooks alada file e thakbe.

Windows e `ThemeContext` ar `themeContext` same file dhora hoy, tai purono file delete kore notun file banale case er jhamela hoy na.

## GSAP er jonno kichu note

ScrollSmoother ar Lenis ekshathe use kora jay na, tai amra shudhu GSAP use korbo. Framer Motion hover ar choto jinish e, ar GSAP shudhu scroll linked cinematic e rakhbo jate duita jhamela na kore. Mobile e animation halka rakhte `gsap.matchMedia` use korbo. Reference: https://gsap.com/cheatsheet

## Auth er note

Backend nai bole login ar signup fake hobe, mane user er data localStorage e thakbe. Logout kono page na, ekta action jeta login state muche Home e pathiye dey.

## Common error ar tar fix

Proti bar terminal e command chalanor age check koro tumi `rentride` folder er bhetor e acho kina. `Reactpro_2` er baire `npm install` chalale oikhane alada `node_modules` toiri hoy, ar tokhon React er duita copy thake. Tar fol hishebe browser e faka page ashe ar console e `Invalid hook call` ba `Cannot read properties of null (reading 'useRef')` dekhay. Fix holo `Reactpro_2` er sorasori bhetorer `node_modules`, `package.json` ar `package-lock.json` delete kora (`rentride` er bhetorer kichu na), tarpor `rentride` e giye `npm install react-router-dom` chalano.

Address bar e `5174` dekhle bujhbe ager server ekhono chalu ache, tai shob terminal bondho kore abar chalao.

VS Code e `Fast refresh only works when a file only exports components` error dekhale oi file ta bhag korte hobe, component ekta file e ar hook ba constant onno file e.

## Commit er niyom

Proti step shesh hole ekta commit. Message er format: `type: choto title`, tarpor `-m` diye point kore ki ki hoyeche. Type gulo: `feat` notun kaj, `refactor` kaj bodle structure bhag kora, `fix` bug thik kora, `docs` md file update.

## Command

```bash
npm create vite@latest rentride -- --template react-ts
cd rentride
npm install
npm run dev
```

Claude finished the response
