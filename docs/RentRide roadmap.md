=# RentRide Roadmap

RentRide ekta frontend only React project, jekhane ride share driver der jonno gari rental er website banano hobe. Backend nai, data local JSON file theke ashe.

Stack: Vite, React, TypeScript, React Router, TanStack Query, Redux Toolkit, Context API, React Toastify, Framer Motion, GSAP.

## Project Structure

```
rentride/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── images/                 (gari ar hero er chhobi, lazy load hobe)
└── src/
    ├── main.tsx                (provider gulo)
    ├── App.tsx                 (routes, Suspense, ToastContainer)
    ├── index.css
    ├── types.ts                (Car type, Step 3)
    ├── api/
    │   ├── cars.ts             (mock fetch function)
    │   └── hooks.ts            (useCars, useFaqs, useSubmitBooking)
    ├── data/
    │   ├── cars.json
    │   └── faqs.json
    ├── store/
    │   ├── index.ts            (Redux store, typed hooks)
    │   ├── bookingSlice.ts     (selected car, insurance, days, filter)
    │   └── authSlice.ts        (logged in user)
    ├── context/
    │   └── ThemeContext.tsx    (dark ar light theme)
    ├── animations/
    │   └── heroTimeline.ts     (GSAP timeline, Step 9)
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── CarCard.tsx         (React.memo diye)
    │   ├── Toggle.tsx          (insurance on/off)
    │   ├── FaqList.tsx
    │   ├── Skeleton.tsx        (loading shimmer)
    │   └── ProtectedRoute.tsx  (login chhara Booking e jete dey na)
    └── pages/
        ├── Home.tsx
        ├── Fleet.tsx
        ├── Booking.tsx         (lazy load)
        ├── FaqPage.tsx
        ├── Login.tsx           (lazy load)
        └── Signup.tsx          (lazy load)
```

## Step Table

| Step | Ki shikhbe                                           | File gulo                                                                            | Obostha |
| ---- | ---------------------------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| 1    | Vite, component, JSX                                 | `App.tsx`, `Navbar.tsx`, `Footer.tsx`                                                | Done    |
| 2    | React Router                                         | `main.tsx`, `Home.tsx`, `Fleet.tsx`, `FaqPage.tsx`, `NavLink`                        | Done    |
| 3    | `useState`, props, list filter                       | `types.ts`, `CarCard.tsx`, `Fleet.tsx`                                               | Cholche |
| 4    | `useEffect`, fetch                                   | `data/cars.json`, `data/faqs.json`                                                   | Baki    |
| 5    | TanStack Query                                       | `api/cars.ts`, `api/hooks.ts`                                                        | Baki    |
| 6    | Context API ar Redux Toolkit                         | `ThemeContext.tsx`, `bookingSlice.ts`, `store/index.ts`, `Toggle.tsx`, `Booking.tsx` | Baki    |
| 7    | Auth, protected route, Toastify                      | `authSlice.ts`, `Login.tsx`, `Signup.tsx`, `ProtectedRoute.tsx`                      | Baki    |
| 8    | Framer Motion er basic animation                     | shob component e animation, notun file nai                                           | Baki    |
| 9    | GSAP cinematic scroll                                | `animations/heroTimeline.ts`, `Home.tsx`                                             | Baki    |
| 10   | `useMemo`, `useCallback`, `React.memo`, lazy loading | `Skeleton.tsx`, `public/images`                                                      | Baki    |

`Footer.tsx` ar `FaqPage.tsx` kono step e nai, jokhon iccha banate paro.

## Kon jinish kothay thake

| Jinish                                                    | Kothay             | Keno                                             |
| --------------------------------------------------------- | ------------------ | ------------------------------------------------ |
| Fleet, car details, FAQ, booking submit                   | TanStack Query     | Eta server data, caching ar loading nijei shamle |
| Selected car, insurance toggle, days, filter, login state | Redux Toolkit      | Eta client state, onek component e lage          |
| Dark ar light theme                                       | Context API        | Choto global value, kom change hoy               |
| Success ar error message                                  | React Toastify     | Action er result dekhano                         |
| Hover, entrance, FAQ accordion, page transition           | Framer Motion      | Component level animation                        |
| Scroll linked cinematic section, pin, scrub               | GSAP ScrollTrigger | Scroll er shathe bandha animation                |

## GSAP er jonno kichu note

ScrollSmoother ar Lenis ekshathe use kora jay na, tai amra shudhu GSAP use korbo. Framer Motion hover ar choto jinish e, ar GSAP shudhu scroll linked cinematic e rakhbo jate duita jhamela na kore. Mobile e animation halka rakhte `gsap.matchMedia` use korbo. Reference: https://gsap.com/cheatsheet

## Auth er note

Backend nai bole login ar signup fake hobe, mane user er data localStorage e thakbe. Logout kono page na, ekta action jeta login state muche Home e pathiye dey.

## Common error ar tar fix

Proti bar terminal e command chalanor age check koro tumi `rentride` folder er bhetor e acho kina. `Reactpro_2` er baire `npm install` chalale oikhane alada `node_modules` toiri hoy, ar tokhon React er duita copy thake. Tar fol hishebe browser e faka page ashe ar console e `Invalid hook call` ba `Cannot read properties of null (reading 'useRef')` dekhay. Fix holo `Reactpro_2` er sorasori bhetorer `node_modules`, `package.json` ar `package-lock.json` delete kora (`rentride` er bhetorer kichu na), tarpor `rentride` e giye `npm install react-router-dom` chalano.

Address bar e `5174` dekhle bujhbe ager server ekhono chalu ache, tai shob terminal bondho kore abar chalao.

## Command

```bash
npm create vite@latest rentride -- --template react-ts
cd rentride
npm install
npm run dev
```
