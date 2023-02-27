// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-controller-bg">
          <h1 className="heading">Layout</h1>
          <div className="all-checkbox-containers">
            <div className="checkbox-label-cont">
              <input
                checked={showContent}
                type="checkbox"
                onChange={onChangeContent}
                id="content"
                className="checkbox"
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="checkbox-label-cont">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                onChange={onChangeLeftNavbar}
                id="leftNavbar"
                className="checkbox"
              />
              <label htmlFor="leftNavbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-label-cont">
              <input
                checked={showRightNavbar}
                type="checkbox"
                onChange={onChangeRightNavbar}
                id="rightNavbar"
                className="checkbox"
              />
              <label htmlFor="rightNavbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationControl
