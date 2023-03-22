import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"


type Props = {
  onClick: (value: string) => void
}

const Header = ({ onClick }: Props) => {

  const router = useRouter();

  const [value, setValue] = useState<string>('')

  return (

    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">Wishlist</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="btn btn-square" onClick={() => onClick(value)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => router.push('/home')}>Home</button>
              </li>
              <li>
                <label htmlFor="my-modal-3">Add</label>
              </li>
              <li>
                <a href={"/"}>List</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
