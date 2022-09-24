import Current from "../Components/current";
import Sidebar from "../Components/sidebar";

const Profile = () => {
  return (
    <div className="flex-all">
            <Sidebar/>
            <div className="flex-one">
                <div className="one">
                    <Current/>
                    <main className="new">
                        
                    </main>
                </div>
            </div>
        </div>
  )
}

export default Profile;