import { ThemeToggle } from "../components/ThemeToggle";
export const NotFound = () => {
  return (
      <div className="min-h-screen container relative">
        <ThemeToggle />
        <div className="star w-1 h-1 top-10 left-300 animate-meteor"></div>
        <div className="star w-1 h-2 top-50 left-150 animate-meteor"></div>
        <div className="star w-1 h-1 top-10 left-20 animate-meteor"></div>
        <div className="star w-2 h-2 top-80 left-40 animate-meteor"></div>
      </div>
  )
}